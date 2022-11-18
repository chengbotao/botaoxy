/*
 * @Author: Chengbotao
 * @Date: 2022-11-18 10:43:39
 */
import { render } from '@testing-library/vue';
import Icon from './index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

describe('Button Component', () => {
  // 应呈现正确的默认按钮
  test('should render the correct default button', async () => {
    const { getByTestId } = render(Icon, {
      props: {
        icon: 'coffee',
      },
      attrs: {
        'data-testid': 'xyicon',
      },
    });
    const element = getByTestId('xyicon');
    expect(element.className).toContain('xy-icon');
  });
});