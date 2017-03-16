import React from 'react';
import DisplayField from './DisplayField';
import HistoryField from './HistoryField';
import InputField from './InputField';
import NPCStore from './stores/NPCStore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      historyCode: [],
      isGameOver: false,
      npcTalk: NPCStore.getAll(),
      warning: '',
      startCode: 0,
      endCode: 100
    };
  }

  componentDidMount() {
    // 取得終極密碼
    this.randomCode = Math.floor((Math.random() * 100) + 1);
    // console.log(`終極密碼：${this.randomCode}`);
  }

  handleSubmit(event) {
    console.log(event.target.value);
    const code = Number(this.state.value);
    if (code === parseInt(code, 10)) {
      // 判斷號碼是否為終極密碼
      if (code === this.randomCode) {
        this.setState({
          historyCode: this.state.historyCode.concat(code),
          isGameOver: true,
          npcTalk: '命中終極密碼！',
          warning: ''
        });
      } else if (code < this.randomCode && code > this.state.startCode) {
        this.setState({
          historyCode: this.state.historyCode.concat(code),
          npcTalk: `${code}～${this.state.endCode}之間`,
          warning: '',
          startCode: code
        });
      } else if (code > this.randomCode && code < this.state.endCode) {
        this.setState({
          historyCode: this.state.historyCode.concat(code),
          npcTalk: `${this.state.startCode}～${code}之間`,
          warning: '',
          endCode: code
        });
      } else {
        this.setState({
          warning: `請輸入${this.state.startCode}～${this.state.endCode}之間的號碼`
        });
      }
    } else this.setState({ warning: '請輸入整數' });
    this.setState({ value: '' });
    event.preventDefault();
  }

  startAgain() {
    this.setState({
      historyCode: [],
      isGameOver: false,
      npcTalk: '開始！輸入0~100',
      warning: '',
      startCode: 0,
      endCode: 100
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>終極密碼</h2>
        <DisplayField npcTalk={this.state.npcTalk} />
        <HistoryField historyCode={this.state.historyCode} />
        <InputField
          value={this.state.value}
          isGameOver={this.state.isGameOver}
          onChangeValue={event => this.handleChange(event)}
          onSubmitValue={event => this.handleSubmit(event)}
          historyCode={this.state.historyCode}
          warning={this.state.warning}
        />
        <button
          disabled={!this.state.isGameOver}
          onClick={() => this.startAgain()}
        >再來一場</button>
      </div>
    );
  }
}

export default App;
