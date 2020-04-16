import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(res => {
      console.log(res.data);

      setProjects(res.data);
    });
  }, []);

  async function handleAddProject() {
    const fakeProject = {
      owner: "Meeeee",
      title: `New Project ${Date.now()}`
    };
    const response = await api.post('projects', fakeProject);

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}> {project.title}</Text>
          )}
        />

        <TouchableOpacity
         activeOpacity={0.6
        } style={styles.button}
         onPress={handleAddProject}>
            <Text style={styles.buttonText}> Add Project </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#fff',
    fontSize: 28,
    fontWeight: "bold"
  },
  
  button: {
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16
  }
});