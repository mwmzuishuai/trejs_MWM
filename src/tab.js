const tabs = {
    '1-1': '/',
    '1-2': '/base2',
    '1-3': '/base3',
    '1-4': '/base4',
    '1-5': '/base5',
    '1-6': '/base6',
    '1-7': '/base7',
    '2-1': '/material/material1',
    '2-2': '/material/material2',
    '2-3': '/material/material3',
    '2-4': '/material/material4',
    '2-5': '/material/material5',
    '2-6': '/material/material6',
    '2-7': '/material/material7',
    '2-8': '/material/material8',
    // '2-9': '/material/material9',
    // '2-10': '/material/material10',

}
const menu = [
    {
        name: '基础',
        index: '1',
        icon: 'Star',
        children: [
            {
                name: '组合',
                index: '1-1',
            },
            {
                name: '显隐v-if',
                index: '1-2',
            },
            {
                name: '基本',
                index: '1-3',
            },
            {
                name: '方块',
                index: '1-4',
            },
            {
                name: '着色器实践（星空）',
                index: '1-5',
            },
            {
                name: '事件的透传',
                index: '1-6',
            },
            {
                name: '多场景',
                index: '1-7',
            },

        ]
    },
    {
        name: '材料',
        index: '2',
        icon: 'Star',
        children: [
            {
                name: '基础',
                index: '2-1',
            },
            {
                name: '玻璃材质',
                index: '2-2',
            },
            {
                name: '流动波体',
                index: '2-3',
            },
            {
                name: '剪裁',
                index: '2-4',
            },
            {
                name: '图层材质',
                index: '2-5',
            },


            {
                name: 'outline',

                index: '2-6',
            },
            {
                name: '反光漆图层',

                index: '2-7',
            },
            {
                name: 'instanced和继承材质',

                index: '2-8',
            },
            // {
            //     name: 'outline4',

            //     index: '2-9',
            // },
            // {
            //     name: 'outline5',

            //     index: '2-10',
            // }
        ]
    },

]
export { menu, tabs }