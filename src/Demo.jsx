import React,{ Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom';


import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';

class Demo extends Component {
    render() {
        return (
          <BrowserRouter>
            <div>
              <a href="/abc">家</a>
              <a href="/abc1">产品</a>
              <a href="/abc2">我们</a>
              <br/>
              <Link to="abc"> 家</Link>
              <Link to="abc1"> 产品</Link>
              <Link to="abc2">我们</Link>
              <br/>
              <Route path="/abc" component={Home}/>
              <Route path="/abc1" component={Product}/>
              <Route path="/abc2" component={About}/>
            </div>
              
          </BrowserRouter>
               
        );
    }
}

export default Demo;