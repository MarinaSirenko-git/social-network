import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus компонент', () => {
  test('статус переданный через пропсы должен оказаться в локальном стейте не сразу', () => {
    const component = create(<ProfileStatus status="status test" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe(undefined);
  });
  test('div в котором отрисован статус будет отрисован', () => {
    const component = create(<ProfileStatus status="status test" />);
    const rootElements = component.root;
    const div = rootElements.findByType('div');
    expect(div).not.toBe(null);
  });
  test('div в котором отрисован статус будет отрисован с переданным текстом', () => {
    const component = create(<ProfileStatus status="status test" />);
    const rootElements = component.root;
    const div = rootElements.findByType('div');
    expect(div.innerText).toBe('status test');
  });
});
