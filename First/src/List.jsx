function List() {
    const fruits = [{name: "apple", calories : 95}, 
        {name: "banana", calories : 105}, 
        {name: "orange", calories : 69}, 
        {name: "watermelon", calories: 70}];
    const listItems = fruits.map((fruit, index) => <li key={index}>{fruit.name}: &nbsp;
                                                       <b>{fruit.calories}</b></li>);
    return (<ol>{listItems}</ol>);
}

export default List;
