import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
    function greetParent(childName) {
        alert(`Hello Parent ${childName}`);
    }

    return <ChildComponent greetHandler={greetParent} />
}