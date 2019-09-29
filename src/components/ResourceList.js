import React from 'react';
import useResources from './useResources';

// class ResourceList extends React.Component {
//   state = { resources: [] };
  
//   async componentDidMount() {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//     this.setState({ resources: response.data });
//   }

//   async componentDidUpdate(preProps) {
//     if (preProps.resource !== this.props.resource) {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//       this.setState({ resources: response.data });
//     }
//   }

//   render() {
//     return <div>{this.state.resources.length}</div>
//   }
// }

const ResourceList = ({ resource }) => {
  // const [ resources, setResources ] = useState([]);

  // const fetchResource = async (resource) => {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  //   setResources(response.data);
  // }

  // useEffect(() => {
    // fetchResource(resource);
  //   (async (resource) => {
  //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  //     setResources(response.data);
  //   })(resource)
  // }, [resource])
  // if useEffect's second argument's value is the same, the arrow function will not be called
  // if put an empty array as secon argument, the funtion will only be called one time, like in componentDidMount 

  const resources = useResources(resource);

  return (
    <ul>{resources.map(record => (
      <li key={record.id}>{record.title}</li>
    ))}</ul>
  )
}

export default ResourceList;