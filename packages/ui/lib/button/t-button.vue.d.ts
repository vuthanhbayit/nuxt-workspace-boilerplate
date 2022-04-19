import { PropType } from '@vue/composition-api';
declare type ButtonSize = 'sm' | 'md' | 'lg';
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data> & import("@vue/composition-api").Data, {}, {}, {
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
}, {
    size: ButtonSize;
} & {}> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    size: ButtonSize;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<import("@vue/composition-api").Data>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    size: ButtonSize;
} & {}, {
    size: ButtonSize;
}, true>);
export default _default;
