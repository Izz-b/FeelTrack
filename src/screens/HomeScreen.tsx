import React from 'react';
import { Box, Text, Heading, VStack, HStack, Button, ScrollView, Pressable, useTheme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MessageCircle } from 'react-native-feather';

const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const goToChat = () => {
    navigation.navigate('Chat');
  };

  return (
    <Box flex={1} bg={theme.colors.cream} safeArea>
      <ScrollView px={5} py={6}>
        <VStack space={6}>
          <Box alignItems="center" mb={2}>
            <Heading size="lg" textAlign="center" color={theme.colors.primaryText}>
              Hi there, how are you feeling today?
            </Heading>
          </Box>

          <Box 
            bg={theme.colors.cardBackground} 
            rounded="xl" 
            p={5} 
            shadow={2}
          >
            <Heading size="md" mb={3} color={theme.colors.primaryText}>
              Your Daily Reflection
            </Heading>
            <Text fontSize="md" color={theme.colors.secondaryText}>
              Taking a moment to acknowledge your emotions can help you understand yourself better. 
              What's one thing you're grateful for today?
            </Text>
          </Box>

          <VStack space={4}>
            <Heading size="md" color={theme.colors.primaryText}>
              Quick Access
            </Heading>
            
            <HStack space={3} justifyContent="space-between">
              <Pressable 
                onPress={() => navigation.navigate('Check In')}
                flex={1}
              >
                <Box 
                  bg={theme.colors.blushPink} 
                  p={4} 
                  rounded="lg" 
                  alignItems="center"
                >
                  <Text fontWeight="medium" color={theme.colors.primaryText}>
                    Daily Check-In
                  </Text>
                </Box>
              </Pressable>
              
              <Pressable 
                onPress={() => navigation.navigate('Weekly')}
                flex={1}
              >
                <Box 
                  bg={theme.colors.skyBlue} 
                  p={4} 
                  rounded="lg" 
                  alignItems="center"
                >
                  <Text fontWeight="medium" color={theme.colors.primaryText}>
                    Weekly Wrap
                  </Text>
                </Box>
              </Pressable>
              
              <Pressable 
                onPress={() => navigation.navigate('Garden')}
                flex={1}
              >
                <Box 
                  bg={theme.colors.lavender} 
                  p={4} 
                  rounded="lg" 
                  alignItems="center"
                >
                  <Text fontWeight="medium" color={theme.colors.primaryText}>
                    Your Garden
                  </Text>
                </Box>
              </Pressable>
            </HStack>
          </VStack>

          <Button
            leftIcon={<MessageCircle width={20} height={20} stroke="white" />}
            bg={theme.colors.lavender}
            _text={{ color: theme.colors.primaryText, fontWeight: "medium" }}
            onPress={goToChat}
            size="lg"
            mt={4}
          >
            Talk to Your Companion
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;