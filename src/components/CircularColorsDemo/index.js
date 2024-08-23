import dynamic from "next/dynamic";

const CircularColorDemo = dynamic(() =>
    import('./CircularColorsDemo')
);

export default CircularColorDemo;