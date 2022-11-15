import { render, fireEvent, cleanup } from '@testing-library/vue'
import Button from "./index";
describe('Button Component', () => {
    // 应呈现正确的默认按钮
    test("should render the correct default button", () => {
        let count = 0;
        const { getByText } = render(Button, {
            slots: {
                default: "Default Button"
            },
            attrs: {
                onclick: ()=>{
                    count++
                }
            }
        });
        const element = getByText("Default Button") as HTMLButtonElement;
        expect(element.tagName).toEqual('BUTTON');
        expect(element.disabled).toBeFalsy();
        expect(element.className).toBe('xy-button xy-button-default');
        fireEvent.click(element);
        expect(count).toBe(1);
        cleanup();
    });

    // 应该根据不同的props渲染正确的组件
    test("should render the correct component based on different props", () => {
        const { getByText } = render(Button, {
            slots: {
                default: "Primary Button"
            },
            props: {
                btnType: "primary",
                size: "lg",
                className: "xy-custom-btn"
            }
        });
        const element = getByText("Primary Button") as HTMLButtonElement;
        expect(element.className).toBe('xy-button xy-custom-btn xy-button-primary xy-button-lg');
        cleanup();
    })
    
    // 当 btnType 等于 link 并提供 href 时，应该呈现一个 A 标签
    test("should render a link when btnType equals link and href is provided", () => {
        const { getByText } = render(Button, {
            slots: {
                default: "Link Button"
            },
            props: {
                btnType: "link",
                href: "#"
            }
        });
        const element = getByText("Link Button") as HTMLAnchorElement;
        expect(element.tagName).toEqual('A');
        expect(element.className).toBe('xy-button xy-button-link');
        cleanup();
    })

    // 应呈现禁用按钮当 disabled 设置为 true
    test("should render disabled button when disabled set to true", () => {
        const { getByText } = render(Button, {
            slots: {
                default: "Disabled Button"
            },
            props: {
                disabled: true
            }
        });
        const element = getByText("Disabled Button") as HTMLButtonElement;
        expect(element.disabled).toBeTruthy();
        cleanup();
    })

});