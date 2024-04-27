import Button from "./Button";

const list = ['All' , 'Gaming' , 'Songs', 'Gaming' , 'Songs', 'Gaming' , 'Songs', 'Gaming' , 'Songs' , 'Live' , 'Soccer' , 'Cricket' , 'Cooking' , 'Valentines' , 'Spritual' , 'Bhajan' , 'Krishna' , 'Sadhan']

function generateRandomNumber() {
    return Math.floor(Math.random()*100000000);
}

const ButtonList = () => {
    return (
        <div className="flex overflow-x-scroll w-[70vw] m-auto mt-14 scrollbar-hidden">
           {list.map(i => <Button key={generateRandomNumber()} name={i}/>)}
        </div>
    );
}

export default ButtonList;