// Text-to-Speech utility for spelling bee
export class TextToSpeech {
  private synth: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];
  private currentVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    this.synth = window.speechSynthesis;
    this.loadVoices();
    
    // Load voices when they become available
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => this.loadVoices();
    }
  }

  private loadVoices() {
    this.voices = this.synth.getVoices();
    // Prefer English voices, especially US English
    this.currentVoice = this.voices.find(voice => 
      voice.lang.startsWith('en-US') || 
      voice.lang.startsWith('en-GB') ||
      voice.lang.startsWith('en')
    ) || this.voices[0];
  }

  // Speak a word with pronunciation
  speakWord(word: string, phonetic?: string, definition?: string) {
    if (this.synth.speaking) {
      this.synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance();
    utterance.text = word;
    utterance.voice = this.currentVoice;
    utterance.rate = 0.8; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    this.synth.speak(utterance);

    // If phonetic is provided, speak it after a short delay
    if (phonetic) {
      setTimeout(() => {
        const phoneticUtterance = new SpeechSynthesisUtterance();
        phoneticUtterance.text = `Phonetic: ${phonetic}`;
        phoneticUtterance.voice = this.currentVoice;
        phoneticUtterance.rate = 0.7;
        phoneticUtterance.pitch = 0.9;
        phoneticUtterance.volume = 0.8;
        this.synth.speak(phoneticUtterance);
      }, 1000);
    }

    // If definition is provided, speak it after phonetic
    if (definition) {
      setTimeout(() => {
        const definitionUtterance = new SpeechSynthesisUtterance();
        definitionUtterance.text = `Definition: ${definition}`;
        definitionUtterance.voice = this.currentVoice;
        definitionUtterance.rate = 0.7;
        definitionUtterance.pitch = 1.1;
        definitionUtterance.volume = 0.8;
        this.synth.speak(definitionUtterance);
      }, 3000);
    }
  }

  // Speak just the word quickly
  speakWordQuick(word: string) {
    if (this.synth.speaking) {
      this.synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance();
    utterance.text = word;
    utterance.voice = this.currentVoice;
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    this.synth.speak(utterance);
  }

  // Stop any current speech
  stop() {
    this.synth.cancel();
  }

  // Check if speech is supported
  isSupported(): boolean {
    return 'speechSynthesis' in window;
  }
}

// Create a singleton instance
export const tts = new TextToSpeech();
