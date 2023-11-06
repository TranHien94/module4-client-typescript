import './main.scss'

/*import { Greet} from "./components/Greet";
import {Person} from "./components/Person";
import {PersonList} from "./components/PersonList";
import {Button} from "./components/Button";
import {Input} from "./components/Input"
import {Container} from "./components/Container.tsx";
import {LoggedIn} from "./components/LoggedIn.tsx";*/
// import {createContext} from "react";
/*import {User} from "./components/User.tsx";
import {Counter} from "./components/Counter.tsx";
import {DomRef} from "./components/DomRef.tsx";
import {MutableRef} from "./components/MutableRef";
import {Private} from "./components/auth/Private";
import {Profile} from "./components/auth/Profile";
import {List} from "./components/generics/List";
import {RandomNumber} from "./components/restriction/RandomNumber.tsx";*/
// import {Theme} from "./components/Theme";
// import {useState} from 'react'

// type ThemeContextType = "light" | "dark"
// export const ThemeContext = createContext<ThemeContextType>("light")

function AppExample() {
    //const [theme, setTheme] = useState<ThemeContextType>("dark")

    /* const personName = {
         first: 'Minh',
         last: 'Hung'
     }
     const nameList = [
         {
             first: 'Thanh',
             last: 'Thu'
         },
         {
             first: 'Thu',
             last: 'Hien'
         },
         {
             first: 'Tien',
             last: 'Dat'
         }
     ]*/
    return (
        <div className='App'>
            {/*<Greet name="Hung" messageCount={20} isLoggedIn={false}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
            <Button handleClick={(event, id) => {
                console.log("Hello Cac ban", event, id)
            }} />
            <Input value = '' handleChange={(event) => console.log(event)}/>s
            <Container styles={{border: '1px solid black', padding:'1rem'}} />
            <LoggedIn />*/}
           {/* <button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>Change color</button>
            <ThemeContext.Provider value={theme}>
                <Theme/>
            </ThemeContext.Provider>*/}
        {/*    <User />
            <Counter />
            <DomRef />
            <MutableRef/>
            <Private isLoggedIn={true} component={Profile} />

            //Generic Props
            <List items={['Batman', 'SuperMan', 'Wonder Woman']} onClick={item => console.log(item)} />
            <List items={[1,2,3]} onClick={item => console.log(item)} />
            <List items={[
                {
                    id: 1,
                    first: 'Hung',
                    last: 'Nguyen'
                }
            ]} onClick={item => console.log(item)} />
            <RandomNumber value={10} isPositive isNegative isZero />*/}
        </div>
    )
}

export default AppExample
