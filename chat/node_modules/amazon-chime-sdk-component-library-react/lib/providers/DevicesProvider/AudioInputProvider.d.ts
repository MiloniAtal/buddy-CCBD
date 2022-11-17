import type { AudioInputDevice } from 'amazon-chime-sdk-js';
import React from 'react';
import { AudioInputContextType } from '../../types';
interface Props {
    onDeviceReplacement?: (nextDevice: string, currentDevice: AudioInputDevice | undefined) => Promise<AudioInputDevice>;
}
declare const AudioInputProvider: React.FC<Props>;
declare const useAudioInputs: () => AudioInputContextType;
export { AudioInputProvider, useAudioInputs };
