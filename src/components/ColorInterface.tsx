import { useColorStore } from '../colorStore';
import ColorGroup from './ColorGroup';

interface Props {
  colorState: ColorGroup[];
}

const ColorInterface: React.FC<Props> = ({ colorState }) => {
  const theme = useColorStore((state) => state.theme);
  console.log(theme);
  return (
    <div
      className={`flex-grow ${theme === 'dark' ? 'text-white' : 'text-black'}`}
    >
      {colorState.map((colorGroup) => (
        <ColorGroup key={colorGroup.groupName} colorGroup={colorGroup} />
      ))}
    </div>
  );
};

export default ColorInterface;
