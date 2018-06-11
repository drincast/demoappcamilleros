const configTheme = require('./utils/configstyle');

export default {
  container:{
    // alignItems: 'center',
    backgroundColor: configTheme.thisWhite,
    flex: 1,
  },
  bottonContent:{
    alignItems: 'center',
    backgroundColor: configTheme.thisBlue,
    padding: 15,
  },
  bottonText:{
    color: configTheme.thisWhite,
    fontSize: 20,
  }
}
