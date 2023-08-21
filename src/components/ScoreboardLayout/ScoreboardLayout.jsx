import './ScoreboardLayout.scss';

function ScoreboardLayout({children}) {
  return (
    <>
    {children[0]}
    <div className='blue'>
    {children[1]}
    </div>
    {children[2]}
    </>
  );
}

export default ScoreboardLayout;
