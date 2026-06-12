import { describe, it, expect } from 'vitest';
import { extractIdFromUrl } from '../src/utils/helpers';

describe('extractIdFromUrl', () => {
  it('should extract the ID from a typical SWAPI URL', () => {
    expect(extractIdFromUrl('https://swapi.dev/api/people/1/')).toBe('1');
  });

  it('should work without trailing slash', () => {
    expect(extractIdFromUrl('https://swapi.dev/api/planets/10')).toBe('10');
  });

  it('should return null for empty input', () => {
    expect(extractIdFromUrl('')).toBe(null);
  });

  it('should extract correct ID from complex segments', () => {
    expect(extractIdFromUrl('https://swapi.py4e.com/api/starships/12/')).toBe('12');
  });
  
  it('should handle IDs with multiple digits', () => {
    expect(extractIdFromUrl('https://swapi.dev/api/species/37/')).toBe('37');
  });
});
