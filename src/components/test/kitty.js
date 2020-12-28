export const formatDate = (date) => {
    return date.toLocaleDateString();
  }
  
export const Comment = (wlasc) => {
    return (
      <div className={wlasc.class}>
        <div>
          <img
            
            src={wlasc.author.avatarUrl}
            alt={wlasc.author.name}
          />
          <div >
            {wlasc.author.name}
          </div>
        </div>
        <div >{wlasc.text}</div>
        <div >
          {formatDate(wlasc.date)}
        </div>
      </div>
    );
  }
export const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'b  Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
