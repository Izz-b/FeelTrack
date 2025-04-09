import React, { useState, useRef } from 'react';
import { 
  Box, 
  Text, 
  HStack, 
  VStack, 
  Input, 
  IconButton, 
  ScrollView, 
  Heading, 
  Badge, 
  useTheme, 
  KeyboardAvoidingView, 
  Pressable 
} from 'native-base';
import { Platform } from 'react-native';
import { Mic, Send } from 'react-native-feather';

const ChatScreen = () => {
  const theme = useTheme();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: "Hi there! I'm your FeelTrack companion. How are you feeling today?", isUser: false },
  ]);
  const scrollViewRef = useRef();

  const emotions = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '😞', label: 'Sad' },
    { emoji: '😡', label: 'Angry' },
    { emoji: '😴', label: 'Tired' },
  ];

  const sendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = {
      id: chatHistory.length + 1,
      text: message,
      isUser: true,
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatHistory.length + 2,
        text: "Thank you for sharing. It's important to acknowledge how you're feeling. Would you like to talk more about it or would you prefer some suggestions to help with your current mood?",
        isUser: false,
      };
      setChatHistory(prev => [...prev, aiResponse]);
      scrollToBottom();
    }, 1000);
  };

  const sendEmotion = (emotion) => {
    const newMessage = {
      id: chatHistory.length + 1,
      text: `I'm feeling ${emotion.label} ${emotion.emoji}`,
      isUser: true,
    };

    setChatHistory([...chatHistory, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatHistory.length + 2,
        text: `I see you're feeling ${emotion.label.toLowerCase()}. Would you like to share more about what's making you feel this way?`,
        isUser: false,
      };
      setChatHistory(prev => [...prev, aiResponse]);
      scrollToBottom();
    }, 1000);
  };

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <Box flex={1} bg={theme.colors.cream} safeArea>
      <Box py={4} px={5} borderBottomWidth={1} borderBottomColor="gray.200">
        <Heading size="md" textAlign="center">Your Companion</Heading>
      </Box>

      <ScrollView 
        ref={scrollViewRef}
        flex={1}
        px={4}
        py={2}
        onContentSizeChange={scrollToBottom}
      >
        <VStack space={3}>
          {chatHistory.map((chat) => (
            <Box 
              key={chat.id} 
              alignSelf={chat.isUser ? "flex-end" : "flex-start"}
              bg={chat.isUser ? theme.colors.lavender : theme.colors.cardBackground}
              px={4}
              py={3}
              rounded="2xl"
              maxWidth="80%"
              borderBottomLeftRadius={chat.isUser ? "2xl" : "xs"}
              borderBottomRightRadius={chat.isUser ? "xs" : "2xl"}
            >
              <Text color={theme.colors.primaryText}>
                {chat.text}
              </Text>
            </Box>
          ))}
        </VStack>
      </ScrollView>

      <Box py={2}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} px={4}>
          <HStack space={2}>
            {emotions.map((emotion, index) => (
              <Pressable key={index} onPress={() => sendEmotion(emotion)}>
                <Badge 
                  bg={theme.colors.cardBackground} 
                  _text={{ color: theme.colors.primaryText }}
                  rounded="full"
                  px={3}
                  py={1}
                >
                  <Text>{emotion.emoji} {emotion.label}</Text>
                </Badge>
              </Pressable>
            ))}
          </HStack>
        </ScrollView>
      </Box>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
      >
        <HStack space={2} px={4} py={3} alignItems="center">
          <Input
            flex={1}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
            bg={theme.colors.cardBackground}
            rounded="full"
            py={3}
            px={4}
            InputRightElement={
              <IconButton
                icon={<Mic color={theme.colors.primaryText} size={20} />}
                onPress={() => console.log('Voice input')}
                rounded="full"
                mr={1}
              />
            }
          />
          <IconButton
            icon={<Send color={theme.colors.primaryText} size={20} />}
            bg={theme.colors.lavender}
            rounded="full"
            onPress={sendMessage}
          />
        </HStack>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default ChatScreen;