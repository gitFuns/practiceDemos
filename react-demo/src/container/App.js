import React, { Component } from 'react';

import {
    SimpleComponent,
    ComponentDemo,
    SpreadDemo,
    StyleDemo,
    StateDemo,
    PropsDemo,
    PropTypesDemo,
    LifeCycleDemo,
    DestroyComponent,
    HandleDOMComponent,
    HandleEvent,
    SelfCreateComponent,
    UseChildrenComponent,
    FormApp,
    MixinDemo

} from '../components';

let data = {
    name: 'AlphaGo',
    type: 'robot'
};

class App extends Component {
    render(){
        return (
            <div>
                {
                    /*
                     <SimpleComponent />
                     <ComponentDemo name="guoyongfeng" />
                     <SpreadDemo {...data} />
                     <StyleDemo />
                     <StateDemo />
                     <PropsDemo title="设置的标题" />
                     <PropTypesDemo />
                     <LifeCycleDemo />
                     <DestroyComponent />
                     <HandleDOMComponent />
                     <HandleEvent />
                     <SelfCreateComponent />
                     <UseChildrenComponent />
                     <FormApp />
                     */
                }
                <SelfCreateComponent />
            </div>
        )
    }
}

export default App;