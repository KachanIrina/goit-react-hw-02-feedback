import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: 30,
      }}
    >
      <Statistics
        initialGood={0}
        initialNeutral={0}
        initialBad={0}
        total={0}
        positivePercentage={0}
      />
    </div>
  );
};
