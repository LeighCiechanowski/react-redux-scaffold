import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

const authors = [
    {
        id: 1,
        firstName: 'test first name 1',
        lastName: 'test lastname 1'
    },
    {
        id: 2,
        firstName: 'test first name 1',
        lastName: 'test lastname 1'
    }
];

const expectedFormattedAuthors = [
    {
        value: 1,
        text: 'test first name 1 test lastname 1'
    },
    {
        value: 2,
        text: 'test first name 1 test lastname 1'
    }
];

describe('Selectors', () => {
    it('returns authors in correct format', () => {
        expect(authorsFormattedForDropdown(authors)).toEqual(expectedFormattedAuthors);
    });
});