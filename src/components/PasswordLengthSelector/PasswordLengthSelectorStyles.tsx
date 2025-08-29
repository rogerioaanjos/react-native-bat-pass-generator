// src/components/PasswordLengthSelector/PasswordLengthSelectorStyles.tsx

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#E5BF3C',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepperContainer: {
    flexDirection: 'row',
  },
  stepperButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 3,
  },
  stepperButtonText: {
    color: '#E5BF3C',
    fontWeight: 'bold',
    fontSize: 16,
  },
  lengthDisplay: {
    color: '#E5BF3C',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
});
