import { profileReducer, postsActionCreator } from './profileReducer';
import { photoPlug, mockPostText } from '../utils/consts';

it('add new item to posts array', () => {
  // 1. test data
  const action = postsActionCreator('ActionCreator принял текст');
  const state = {
    posts: [
      {
        id: Math.random(),
        userPhotoPath: photoPlug,
        text: mockPostText,
      },
    ],
  };
  // 2. action
  const testProfileReducer = profileReducer(state, action);

  // 3.
  expect(testProfileReducer.posts.length).toBe(2);
});

it('delete item from posts array', () => {
  const action = (index) => ({
    type: 'DELETE-POST',
    index,
  });
  const state = {
    posts: [
      {
        id: Math.random(),
        userPhotoPath: photoPlug,
        text: mockPostText,
      },
    ],
  };
  const testProfileReducer = profileReducer(state, action);
  expect(testProfileReducer.posts.length).toBe(0);
});
