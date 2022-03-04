function App(){
    const App=document.createElement('h1');
    App.textContent='Hello World';
    return App;
}

//const el=App();
document
    .getElementById('root')
    .appendChild(App());
