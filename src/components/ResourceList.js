import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  const [ resources, setResources ] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  }

  useEffect(() => {
    fetchResource(resource);
  }, [resource])
  // if useEffect's second argument's value is the same, the arrow function will not be called

  return <div>{resources.length}</div>
}

export default ResourceList;