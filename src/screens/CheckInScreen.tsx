import React, { useState } from 'react';
import { 
  Box, 
  Text, 
  Heading, 
  VStack, 
  HStack, 
  ScrollView, 
  TextArea, 
  Button, 
  Pressable, 
  useTheme, 
  Center 
} from 'native-base';
import { Mic } from 'react-native-feather';
import Animated, { FadeIn, ZoomIn } from 'react-native-reanimated';

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedText = Animated.createAnimatedComponent(Text);

const CheckInScreen = () => {
  const theme = useTheme();
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emotions = [
    { id: 1, emoji: '😊', label: 'Happy', color: theme.colors.skyBlue },
    { id: 2, emoji: '😌', label: 'Calm', color: theme.colors.lavender },
    { id: 3, emoji: '😐', label: 'Neutral', color: 'gray.200' },
    { id: 4, emoji: '😔', label: 'Sad', color: 'blue.100' },
    { id: 5, emoji: '😡', label: 'Angry', color: 'red.100' },
    { id: 6, emoji: '😰', label: 'Anxious', color: 'orange.100' },
    { id: 7, emoji: '😴', label: 'Tired', color: 'purple.100' },
    { id: 8, emoji: '🥰', label: 'Loved', color: theme.colors.blushPink },
  ];

  const handleSubmit = () => {
    setSubmitted(true);
    // Here you would typically save the check-in data
    setTimeout(() => {
      setSubmitted(false);
      setSelectedEmotion(null);
      setNotes('');
    }, 3000);
  };

  if (submitted) {
    return (
      <Box flex={1} bg={theme.colors.cream} safeArea>
        <Center flex={1} px={5}>
          <AnimatedBox entering={FadeIn}>
            <AnimatedText 
              entering={ZoomIn} 
              fontSize="3xl" 
              fontWeight="bold" 
              textAlign="center"
              color={theme.colors.primaryText}
              mb={4}
            >
              Thank you for sharing ❤️
            </AnimatedText>
            <AnimatedText 
              entering={FadeIn.delay(500)} 
              fontSize="lg" 
              textAlign="center"
              color={theme.colors.secondaryText}
            >
              Your check-in has been recorded
            </AnimatedText>
          </AnimatedBox>
        </Center>
      </Box>
    );
  }

  return (
    <Box flex={1} bg={theme.colors.cream} safeArea>
      <ScrollView px={5} py={6}>
        <VStack space={6}>
          <Box alignItems="center">
            <Heading size="lg" textAlign="center" color={theme.colors.primaryText}>
              Daily Emotion Check-In
            </Heading>
            <Text mt={2} fontSize="md" textAlign="center" color={theme.colors.secondaryText}>
              How are you feeling today?
            </Text>
          </Box>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack space={3} py={4}>
              {emotions.map((emotion) => (
                <Pressable key={emotion.id} onPress={() => setSelectedEmotion(emotion)}>
                  <Box 
                    bg={emotion.color} 
                    p={4} 
                    rounded="xl" 
                    alignItems="center"
                    width={100}
                    borderWidth={selectedEmotion?.id === emotion.id ? 2 : 0}
                    borderColor={theme.colors.primaryText}
                    shadow={2}
                  >
                    <Text fontSize="3xl" mb={2}>{emotion.emoji}</Text>
                    <Text fontWeight="medium" color={theme.colors.primaryText}>
                      {emotion.label}
                    </Text>
                  </Box>
                </Pressable>
              ))}
            </HStack>
          </ScrollView>

          <Box bg={theme.colors.cardBackground} rounded="xl" p={5} shadow={2}>
            <Heading size="md" mb={4} color={theme.colors.primaryText}>
              Want to share more?
            </Heading>
            <TextArea
              value={notes}
              onChangeText={setNotes}
              placeholder="Describe how you're feeling..."
              h={20}
              autoCompleteType="off"
              mb={4}
            />
            <Button
              leftIcon={<Mic color={theme.colors.primaryText} size={20} />}
              variant="outline"
              rounded="full"
              _text={{ color: theme.colors.primaryText }}
              onPress={() => console.log('Voice input')}
            >
              Voice Note
            </Button>
          </Box>

          <Button
            bg={theme.colors.lavender}
            _text={{ color: theme.colors.primaryText, fontWeight: "medium" }}
            onPress={handleSubmit}
            isDisabled={!selectedEmotion}
            size="lg"
            rounded="full"
          >
            Submit
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default CheckInScreen;