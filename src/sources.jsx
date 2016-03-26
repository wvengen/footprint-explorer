import React from 'react';

const Sources = (props) => {
  console.log(props.sources);
  return (
    <div className="text-muted text-right" style={{opacity: 0.75}}>
      {props.sources.map((src, i) =>
        <div key={src.url}>
          <small>
            {i == 0 ? 'Sources: ' : null}
            <a href={src.url} className="text-muted" target="_blank">
              {src.assoc_name}, &quot;{src.title}&quot; ({src.year})
            </a>
          </small>
        </div>
        )}
    </div>
  );
};

Sources.propTypes = {
  sources: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Sources;
