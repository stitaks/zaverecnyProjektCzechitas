import { fairytails } from '../../Constants';
import { Button } from '../Button';
import './style.css';

export const Welcome = () => {
  return (
    <div className="wraperWelcomeWindows">
      <div className="WelcomeWindows">
        <h1>Pohádkové pexeso</h1>
        <p></p>

        {Object.keys(fairytails).map((nameTails) => (
          <Button key={nameTails} name={fairytails[nameTails].name} />
        ))}
      </div>
    </div>
  );
};
