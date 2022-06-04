import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
    function greetParent() {
        alert('Hello Parent');
    }

    return <ChildComponent greetHandler={greetParent}/>
}