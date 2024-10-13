import './TextShadow.scss';

const TextShadow = ({ text, tColor, sColor, fontSize = '40px', fontWeight = 'bold', numSteps = 60, radius = 15 }) => {
  const generateTextShadow = (color, numSteps, radius) => {
    let textShadows = [];

    for (let step = 0; step < numSteps; step++) {
      const angle = (step / numSteps) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      textShadows.push(`${x.toFixed(2)}px ${y.toFixed(2)}px 0px ${color}`);
    }

    return textShadows.join(', ');
  };

  const generatedTextShadow = generateTextShadow(sColor, numSteps, radius);

  return (
    <div
      className="text-shadow"
      style={{
        '--tColor': tColor,
        '--sColor': sColor,
        '--fontSize': fontSize,
        '--fontWeight': fontWeight,
        '--generatedTextShadow': generatedTextShadow,
      }}
    >
      {text}
      <div className="textshadow-sd">
        {text}
      </div>
    </div>
  );
};

export default TextShadow;
