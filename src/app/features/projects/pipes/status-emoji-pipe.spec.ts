import { StatusEmojiPipe } from './status-emoji-pipe';

describe('StatusEmojiPipe', () => {
  const pipe = new StatusEmojiPipe();

  it('transforms Terminé to ✅', () => {
    expect(pipe.transform('Terminé')).toBe('✅');
  });

  it('transforms En cours to ⏳', () => {
    expect(pipe.transform('En cours')).toBe('⏳');
  });

  it('transforms other to 🛑', () => {
    expect(pipe.transform('Autre')).toBe('🛑');
  });
});
