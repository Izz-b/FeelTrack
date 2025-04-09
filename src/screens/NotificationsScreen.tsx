import React from 'react';
import { 
  Box, 
  Text, 
  Heading, 
  VStack, 
  HStack, 
  ScrollView, 
  Switch, 
  useTheme 
} from 'native-base';

const NotificationsScreen = () => {
  const theme = useTheme();
  
  const notifications = [
    {
      id: 1,
      title: 'Morning Check-in',
      description: 'Start your day with a moment of reflection',
      time: '9:00 AM',
      enabled: true,
    },
    {
      id: 2,
      title: 'Midday Breathing',
      description: 'Take a moment to breathe and center yourself',
      time: '1:00 PM',
      enabled: true,
    },
    {
      id: 3,
      title: 'Evening Reflection',
      description: 'Reflect on your day and prepare for tomorrow',
      time: '8:00 PM',
      enabled: true,
    },
    {
      id: 4,
      title: 'Weekly Summary',
      description: 'Review your emotional journey for the week',
      time: 'Sunday, 6:00 PM',
      enabled: true,
    },
  ];

  return (
    <Box flex={1} bg={theme.colors.cream} safeArea>
      <ScrollView px={5} py={6}>
        <VStack space={6}>
          <Box alignItems="center">
            <Heading size="lg" textAlign="center" color={theme.colors.primaryText}>
              Gentle Reminders
            </Heading>
            <Text mt={2} fontSize="md" textAlign="center" color={theme.colors.secondaryText}>
              Customize your check-in nudges
            </Text>
          </Box>

          <VStack space={4}>
            {notifications.map((notification) => (
              <Box 
                key={notification.id}
                bg={theme.colors.cardBackground} 
                rounded="xl" 
                p={4} 
                shadow={2}
              >
                <HStack justifyContent="space-between" alignItems="center">
                  <VStack space={1} flex={1} mr={4}>
                    <Text fontSize="md" fontWeight="medium" color={theme.colors.primaryText}>
                      {notification.title}
                    </Text>
                    <Text fontSize="sm" color={theme.colors.secondaryText}>
                      {notification.time}
                    </Text>
                    <Text fontSize="sm" color={theme.colors.secondaryText}>
                      {notification.description}
                    </Text>
                  </VStack>
                  <Switch
                    isChecked={notification.enabled}
                    colorScheme="primary"
                    onToggle={() => console.log('Toggle notification')}
                  />
                </HStack>
              </Box>
            ))}
          </VStack>

          <Box 
            bg={theme.colors.blushPink} 
            rounded="xl" 
            p={5} 
            shadow={2}
          >
            <Heading size="sm" mb={2} color={theme.colors.primaryText}>
              Mindfulness Tip
            </Heading>
            <Text fontSize="md" color={theme.colors.primaryText}>
              Regular check-ins help build emotional awareness. Even a brief moment of reflection can make a difference in your day.
            </Text>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default NotificationsScreen;