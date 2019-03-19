// will store all 4 user inputs and date
import { AsyncStorage } from 'react-native';

import { BASE_STORAGE_PATH } from '../const/path';

class ReadingStorage {
    static async setInput() {
        const inputIds = await ReadingStorage.getInputs();
        await AsyncStorage.setItem(`${BASE_STORAGE_PATH}:inputIds`, JSON.stringify(inputIds));
    }
    
    static async getInputs() {
        const ids = await AsyncStorage.getItem(`${BASE_STORAGE_PATH}:inputIds`);

        const inputIds = ids ? JSON.parse(ids) : [];
        return inputIds;
    }
}

export { ReadingStorage }