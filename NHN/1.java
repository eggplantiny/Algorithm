import java.util.ArrayList;
import java.util.Scanner;


class Main {

  public static class Participant {
    private boolean mIsTagger;
    private boolean mIsFaster;
    private char mNickname;
    private int mCatchedCount;
    
    public Participant (char nickname, boolean isFaster, boolean isTagger) {
      this.mNickname = nickname;
      this.mIsFaster = isFaster;
      this.mIsTagger = isTagger;
      this.mCatchedCount = 0;

      if (isTagger == true) {
        this.mCatchedCount += 1;
      }
    }
    
    public boolean isTagger () {
      return this.mIsTagger;
    }
    
    public boolean isFaster () {
      return this.mIsFaster;
    }
    
    public char getNickname () {
        return this.mNickname;
    }
  
    public int getCatchedCount () {
        return this.mCatchedCount;
    }
  
    public void addCatchedCount () {
        this.mCatchedCount += 1;
    }
  
    public void setTagger (boolean tagger) {
        this.mIsTagger = tagger;
    }

    public void printScore () {
      System.out.println("" + this.mNickname + " " + this.mCatchedCount);
    }
  }


public class CircularQueue {
    
  // 큐 배열은 front와 rear 그리고 maxSize를 가진다.
  private int front;
  private int rear;
  private int maxSize;
  private Participant[] queueArray;

  public CircularQueue(int maxSize){
    this.front = 0;
    this.rear = -1;

    this.maxSize = maxSize+1;    
    this.queueArray = new Participant[this.maxSize];
  }
  
  public boolean empty(){
    return (front == rear + 1) || (front + maxSize - 1 == rear);
  }
  
  public boolean full(){
    return (rear == maxSize - 1) || (front + maxSize - 2 == rear);
  }

  public void insert(Participant item){
      
    if(full()) throw new ArrayIndexOutOfBoundsException();

    if(rear == maxSize - 1){
        rear = -1;
    }
    queueArray[++rear] = item;
  }
  
  public Participant peek(){
      if(empty()) throw new ArrayIndexOutOfBoundsException();
      
      return queueArray[front];
  }
  
  public Participant remove(){
      
    Participant item = peek();
    front++;

    if(front == maxSize){
        front = 0;
    }
    return item;
  }

  public int size () {
    return this.queueArray.length;
  }
}

  private static boolean isQuickPlayer (char nickname, int numOfQuickPlayers, char[] namesOfQuickPlayers) {
    boolean result = false;

    for (int c = 0; c < numOfQuickPlayers; c++) {
      char targetNickname = namesOfQuickPlayers[c];
      if (targetNickname == nickname) {
        result = true;
        break;
      }
    }

    return result;
  }

  private static void solution(int numOfAllPlayers, int numOfQuickPlayers, char[] namesOfQuickPlayers, int numOfGames, int[] numOfMovesPerGame){
    // TODO: 이곳에 코드를 작성하세요. 추가로 필요한 함수와 전역변수를 선언해서 사용하셔도 됩니다.
    CircularQueue queue = new CircularQueue (numOfAllPlayers - 1);
    char startNickname = 65;

    Participant tagger = new Participant(startNickname, false, true);

    for (int c = 1; c < numOfAllPlayers; c++) {
        char nickname = (char) (startNickname + c);
        boolean isTagger = false;
        boolean isFaster = isQuickPlayer(nickname, numOfQuickPlayers, namesOfQuickPlayers);
        Participant participant = new Participant(nickname, isFaster, isTagger);
        queue.insert(participant);
    }

    int taggerPosition = 0;
    for (int c = 0; c < numOfGames; c++) {
      int move = numOfMovesPerGame[c];
      
      taggerPosition += move;

      if (taggerPosition < 0) {
        taggerPosition = taggerPosition - queue.size();
      } else if (taggerPosition > numOfAllPlayers) {
        taggerPosition = queue.size() - taggerPosition;
      }

      Participant target = queue.peek(taggerPosition);
      System.out.println("fucking " + taggerPosition + " " + target.getNickname() + " " + target.isFaster());

      if (target.isFaster() == false) {
        target.setTagger(true);
        target.addCatchedCount();
        participants.get(taggerPosition).setTagger(false);
      }
    }

    for (int c = 0; c < numOfAllPlayers; c++) {
      participants.get(c).printScore();
    }
  }

  private static class InputData {
    int numOfAllPlayers;
    int numOfQuickPlayers;
    char[] namesOfQuickPlayers;
    int numOfGames;
    int[] numOfMovesPerGame;
  }

  private static InputData processStdin() {
    InputData inputData = new InputData();

    try (Scanner scanner = new Scanner(System.in)) {
      inputData.numOfAllPlayers = Integer.parseInt(scanner.nextLine().replaceAll("\\s+", ""));

      inputData.numOfQuickPlayers = Integer.parseInt(scanner.nextLine().replaceAll("\\s+", ""));
      inputData.namesOfQuickPlayers = new char[inputData.numOfQuickPlayers];
      System.arraycopy(scanner.nextLine().trim().replaceAll("\\s+", "").toCharArray(), 0, inputData.namesOfQuickPlayers, 0, inputData.numOfQuickPlayers);

      inputData.numOfGames = Integer.parseInt(scanner.nextLine().replaceAll("\\s+", ""));
      inputData.numOfMovesPerGame = new int[inputData.numOfGames];
      String[] buf = scanner.nextLine().trim().replaceAll("\\s+", " ").split(" ");
      for(int i = 0; i < inputData.numOfGames ; i++){
        inputData.numOfMovesPerGame[i] = Integer.parseInt(buf[i]);
      }
    } catch (Exception e) {
      throw e;
    }

    return inputData;
  }

  public static void main(String[] args) throws Exception {
    InputData inputData = processStdin();

    solution(inputData.numOfAllPlayers, inputData.numOfQuickPlayers, inputData.namesOfQuickPlayers, inputData.numOfGames, inputData.numOfMovesPerGame);
  }
}