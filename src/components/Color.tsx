interface Props {
  color: Color;
}

const Color: React.FC<Props> = ({ color }) => {
  return (
    <div
      className='size-32'
      style={{
        backgroundColor: `hsl(${color.hue}, ${color.saturation}, ${color.lightness})`,
      }}
    />
  );
};

export default Color;
