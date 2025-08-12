import { Router, Route, Switch } from 'wouter';
import HomePage from './components/HomePage';
import RoomsPage from './pages/RoomPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Router>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/rooms" component={RoomsPage} />
            <Route path="/booking" component={BookingPage} />
            <Route path="/contact" component={ContactPage} />
            <Route>
              <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg text-muted-foreground">
                  The page you're looking for doesn't exist.
                </p>
              </div>
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}