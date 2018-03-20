import {
  page,
  find,
  text,
  clickable,
  isPresent
} from '@bigtest/interaction';
  
  @page class HomePage {
    home = find('home');
  
  }
  
export default HomePage;
  