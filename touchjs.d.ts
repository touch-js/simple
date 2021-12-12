/**
 * 版本信息
 * @since 1.0.0
 */
interface Version {
    /**
     * 获取TouchJS版本号：语义版本号
     * @since 1.0.0
     */
    readonly name: string

    /**
     * 获取TouchJS版本号：整数类型
     * @since 1.0.0
     */
    readonly code: number;

    /**
     * 获取V8引擎的版本号
     * @since 1.0.0
     */
    readonly v8: string;
}

/**
 * 软件相关
 * @since 1.0.0
 */
interface App {

    /**
     * 打开一个已经安装的软件
     *
     * @param package 软件包名
     * @since 1.0.0
     */
    run(package: string): void;
}

/**
 * 线程相关
 * @since 1.0.0
 */
interface Thread {
    /**
     * 线程睡眠
     * @param duration 睡眠时长：毫秒
     * @since 1.0.0
     */
    sleep(duration: number): void;
}

/**
 * 无障碍权限相关功能
 * @since 1.0.0
 */
interface Accessibility {

    /**
     * 按键相关
     * @since 1.0.0
     */
    readonly action: AccessibilityAction

    /**
     * 获取当前界面全部节点
     * @since 1.0.0
     */
    findAll(): AccessibilityNodeInfo[];

    /**
     * 根据ID获取界面元素
     * @param id 元素ID
     * @since 1.0.0
     */
    findByViewId(id: string): AccessibilityNodeInfo[];

    /**
     * 根据内容获取界面元素
     * @param text 元素内容
     * @since 1.0.0
     */
    findByViewText(text: string): AccessibilityNodeInfo[];

    /**
     * 等待一个元素出现
     * @param timeout 等待超时时间 单位：毫秒 默认：15000
     * @since 1.0.0
     * @throws 等待超时将抛出异常
     */
    wait(param: AccessibilityWaitBean, timeout?: number): AccessibilityNodeInfo[];

    /**
     * 等到一个元素出现
     * @param viewId view id
     * @param timeout 等待超时时间 单位：毫秒 默认：15000
     * @throws 如果超时将抛出异常
     */
    waitByViewId(viewId: string, timeout?: number): AccessibilityNodeInfo;

    /**
     * 等待一个界面出现
     * @param activityPackageName activity的完整包名
     * @param timeout 等待超时时间 单位：毫秒 默认：15000
     * @throws 如果超时将抛出异常
     */
    waitByActivity(activityPackageName: string, timeout?: number): void;


}

/**
 * 在使用过程中必须有一个有效的属性
 * @since 1.0.0
 */
interface AccessibilityWaitBean {
    /**
     * resource-id 字段
     * @since 1.0.0
     */
    id?: string | undefined

    /**
     * text 字段
     * @since 1.0.0
     */
    text?: string | undefined

    /**
     * class字段
     * @since 1.0.0
     */
    class?: string | undefined

    /**
     * content-desc
     * @since 1.0.0
     */
    desc?: string | undefined

    /**
     * clickable
     * @since 1.0.0
     */
    clickable?: boolean | undefined

    /**
     * enabled
     * @since 1.0.0
     */
    enabled?: boolean | undefined
}

/**
 * @since 1.0.0
 */
interface AccessibilityAction {

    /**
     * 模拟按下：主页键
     * @since 1.0.0
     */
    home(): void;

    /**
     * 模拟按下：返回
     * @since 1.0.0
     */
    back(): void;

    /**
     * 拉出通知栏
     * @since 1.0.0
     */
    notifications(): void;

    /**
     * 显示快速设置(下拉通知栏到底)
     * @since 1.0.0
     */
    quickSettings(): void;

    /**
     * 弹出电源键菜单
     * @since 1.0.0
     */
    powerDialog(): void;

    /**
     * @since 1.0.0
     */
    recents(): void;

    /**
     * @since 1.0.0
     */
    lockScreen(): void;

    /**
     * @since 1.0.0
     */
    takeScreenshot(): void;
}

/**
 * 无障碍元素
 * @since 1.0.0
 */
interface AccessibilityNodeInfo {
    /**
     * 执行操作
     * @param action 操作ID
     * @since 1.0.0
     */
    action(action: number): void;

    /**
     * 执行点击动作
     * @since 1.0.0
     */
    click(): void;

    /**
     * 是否选中状态
     * @since 1.0.0
     */
    isChecked(): boolean;
}

interface Device {
    readonly build: DeviceBuild
    readonly os: DeviceOs
}

interface DeviceBuild {
    readonly board: string
    readonly manufacturer: string
    readonly model: string
    readonly fingerprint: string
}

interface DeviceOs {
    readonly name: string
}

interface TouchJS {
    /**
     * 版本相关
     * @since 1.0.0
     */
    readonly version: Version

    /**
     * 系统软件相关
     * @since 1.0.0
     */
    readonly app: App

    /**
     * 线程相关
     * @since 1.0.0
     */
    readonly thread: Thread

    /**
     * 无障碍服务
     * @since 1.0.0
     */
    readonly accessibility: Accessibility

    /**
     * 设备相关
     * @since 1.0.0
     */
    readonly device: Device
}

declare global {
    var touchjs: TouchJS
}

export = global