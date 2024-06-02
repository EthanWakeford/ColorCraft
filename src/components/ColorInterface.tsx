import ColorGroup from './ColorGroup';

interface Props {
  colorState: ColorGroup[];
}

const ColorInterface: React.FC<Props> = ({ colorState }) => {
  return (
    <div className='flex-grow'>
      {colorState.map((colorGroup) => (
        <ColorGroup key={colorGroup.groupName} colorGroup={colorGroup} />
      ))}
    </div>
  );
};

export default ColorInterface;
