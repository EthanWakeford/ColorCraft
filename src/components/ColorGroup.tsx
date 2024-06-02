import Color from './Color';

interface Props {
  colorGroup: ColorGroup;
}

const ColorGroup: React.FC<Props> = ({ colorGroup }) => {
  return (
    <div className='flex w-full'>
      <div className='size-32'>
        <h2>{colorGroup.groupName}</h2>
      </div>
      {colorGroup.colors.map((color, index) => (
        <Color key={index} color={color} />
      ))}
    </div>
  );
};

export default ColorGroup;
