import { Button } from 'primereact/button';
import {Card} from 'primereact/card'
import { Divider } from 'primereact/divider';
import { Menubar } from 'primereact/menubar';


import './App.css';

const items = [
  {
      label: 'Home',
      icon: 'pi pi-home'
  },
  {
      label: 'Features',
      icon: 'pi pi-star'
  },
  {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
          {
              label: 'Core',
              icon: 'pi pi-bolt',
              shortcut: '⌘+S'
          },
          {
              label: 'Blocks',
              icon: 'pi pi-server',
              shortcut: '⌘+B'
          },
          {
              label: 'UI Kit',
              icon: 'pi pi-pencil',
              shortcut: '⌘+U'
          },
          {
              separator: true
          },
          {
              label: 'Templates',
              icon: 'pi pi-palette',
              items: [
                  {
                      label: 'Apollo',
                      icon: 'pi pi-palette',
                      badge: 2
                  },
                  {
                      label: 'Ultima',
                      icon: 'pi pi-palette',
                      badge: 3
                  }
              ]
          }
      ]
  },
  {
      label: 'Contact',
      icon: 'pi pi-envelope',
      badge: 3
  }
];
function App() {
  return (
    <div>
      <div>
      <Menubar model={items} />
      </div>
      <Card title="probando primereact">
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
</Card>
<Divider />
<Button label="Primary" />
<Divider />
<Button label="Secondary" severity="secondary" />
<Divider />
<Button label="Success" severity="success" />
<Divider />
<Button label="Info" severity="info" />
<Divider />
<Button label="Warning" severity="warning" />
<Divider />
<Button label="Help" severity="help" />
<Divider />
<Button label="Danger" severity="danger" />
    </div>
  );
}

export default App;
