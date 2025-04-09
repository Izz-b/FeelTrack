import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Text, 
  Heading, 
  VStack, 
  HStack, 
  ScrollView, 
  useTheme 
} from 'native-base';
import { Dimensions } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import Svg, { Path, Circle } from 'react-native-svg';

const AnimatedBox = Animated.createAnimatedComponent(Box);

const GardenScreen = () => {
  const theme = useTheme();
  const [plants, setPlants] = useState([]);
  const screenWidth = Dimensions.get('window').width;

  // Mock data for plants
  useEffect(() => {
    const mockPlants = [
      { id: 1, type: 'flower', color: theme.colors.blushPink, size: 1, x: screenWidth * 0.2, y: 100 },
      { id: 2, type: 'flower', color: theme.colors.lavender, size: 0.8, x: screenWidth * 0.5, y: 150 },
      { id: 3, type: 'flower', color: theme.colors.skyBlue, size: 1.2, x: screenWidth * 0.7, y: 120 },
      { id: 4, type: 'flower', color: theme.colors.blushPink, size: 0.9, x: screenWidth * 0.3, y: 200 },
      { id: 5, type: 'flower', color: theme.colors.skyBlue, size: 1, x: screenWidth * 0.6, y: 220 },
      { id: 6, type: 'flower', color: theme.colors.lavender, size: 1.1, x: screenWidth * 0.8, y: 250 },
      { id: 7, type: 'flower', color: theme.colors.blushPink, size: 0.7, x: screenWidth * 0.4, y: 280 },
    ];
    setPlants(mockPlants);
  }, [screenWidth, theme]);

  const renderFlower = (plant) => {
    const petalSize = 15 * plant.size;
    
    return (
      <Svg height={petalSize * 5} width={petalSize * 5} viewBox="0 0 100 100">
        {/* Stem */}
        <Path
          d={`M 50 100 L 50 60`}
          stroke="green"
          strokeWidth="3"
          fill="none"
        />
        
        {/* Petals */}
        <Circle cx="50" cy="30" r="20" fill={plant.color} />
        <Circle cx="30" cy="40" r="20" fill={plant.color} />
        <Circle cx="70" cy="40" r="20" fill={plant.color} />
        <Circle cx="40" cy="60" r="20" fill={plant.color} />
        <Circle cx="60" cy="60" r="20" fill={plant.color} />
        
        {/* Center */}
        <Circle cx="50" cy="45" r="15" fill="yellow" />
      </Svg>
    );
  };

  return (
    <Box flex={1} bg={theme.colors.cream} safeArea>
      <Box px={5} py={4}>
        <Heading size="lg" textAlign="center" color={theme.colors.primaryText}>
          Your Garden
        </Heading>
        <Text mt={1} fontSize="md" textAlign="center" color={theme.colors.secondaryText}>
          Watch your emotions bloom
        </Text>
      </Box>

      <Box 
        mx={5} 
        height={350} 
        bg={theme.colors.cream} 
        rounded="xl" 
        position="relative"
        borderWidth={1}
        borderColor="gray.200"
      >
        {plants.map((plant) => (
          <AnimatedBox
            key={plant.id}
            entering={FadeIn.delay(plant.id * 200)}
            position="absolute"
            left={plant.x - 25 * plant.size}
            top={plant.y}
          >
            {renderFlower(plant)}
          </AnimatedBox>
        ))}
      </Box>

      <ScrollView px={5} py={4}>
        <VStack space={4}>
          <Box bg={theme.colors.cardBackground} rounded="xl" p={5} shadow={2}>
            <Heading size="md" mb={4} color={theme.colors.primaryText}>
              Garden Stats
            </Heading>
            
            <VStack space={3}>
              <HStack justifyContent="space-between">
                <Text fontSize="md" color={theme.colors.secondaryText}>
                  Total Plants:
                </Text>
                <Text fontSize="md" fontWeight="medium" color={theme.colors.primaryText}>
                  7
                </Text>
              </HStack>
              
              <HStack justifyContent="space-between">
                <Text fontSize="md" color={theme.colors.secondaryText}>
                  Check-in Streak:
                </Text>
                <Text fontSize="md" fontWeight="medium" color={theme.colors.primaryText}>
                  7 days
                </Text>
              </HStack>
              
              <HStack justifyContent="space-between">
                <Text fontSize="md" color={theme.colors.secondaryText}>
                  Garden Started:
                </Text>
                <Text fontSize="md" fontWeight="medium" color={theme.colors.primaryText}>
                  May 1, 2023
                </Text>
              </HStack>
            </VStack>
          </Box>

          <Box bg={theme.colors.lavender} rounded="xl" p={5} shadow={2}>
            <Heading size="md" mb={2} color={theme.colors.primaryText}>
              How Your Garden Grows
            </Heading>
            <Text fontSize="md" color={theme.colors.primaryText}>
              Each flower represents a day you checked in with your emotions. The colors reflect how you felt, and the size shows the intensity of your emotions. Keep checking in to see your garden flourish!
            </Text>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default GardenScreen;