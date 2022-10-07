
import Header from './components/Header'
function App() {
  const name = 'Trevor'
  // If you don't want an explicit element returned and just the contents,
  // enclose code in <> </>
  return (
    <div className='container'>
      <Header title="Task Tracker" />
    </div>
  );
  // only a single element can be returned. NOT multiple divs for example
}

export default App;
