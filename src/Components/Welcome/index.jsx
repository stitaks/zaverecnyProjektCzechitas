import { fairytails } from '../../Constants';
import { Button } from '../Button';
import './style.css';

export const Welcome = () => {
  return (
    <div className="welcomeWindowWrapper">
      <div className="welcomeWindow">
        <h1>Pohádkové pexeso</h1>
        <p>Vítejte, pojďte si zahrát naše pexeso. Když se vám podaří vyhrát, za odměnu dostanete pohádku. </p>
        {Object.keys(fairytails).map((nameTails) => (
          <Button
            key={nameTails}
            nameTails={nameTails}
            name={fairytails[nameTails].name}
          />
        ))}
      </div>
    </div>
  );
};
