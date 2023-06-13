import { Route, Routes, Link } from "react-router-dom";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Test from "./components/Test/Test";
import { card1 } from "./Data/Data";
import Footer from "./components/Footer/Footer";
import MainCard from "./components/Card/MainCard";

const COLORS = [
  { id: 1, name: "Test Topshirish", color: "grey", way: 'testsinov', status: true },
  { id: 2, name: "Avto Rules", color: "yellow",  way: 'rules', status: false },
  { id: 3, name: "Yengiliklar", color: "green",  way: 'news', status: false },
  { id: 4, name: "Mashina turlari", color: "orange", way: 'cartypes',  status: false },
  { id: 5, name: "New", color: "plur",  way: 'new', status: false },
];

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
    

      <main className={classes.main}>
        {COLORS.map((item) => (
          <Card
            key={item.id}
            {...item}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
