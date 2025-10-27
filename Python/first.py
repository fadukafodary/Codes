a = 23
b =23.67
print(a)
print(b)
c= b >a
b -=3
d = 10 >=5
print(b)
print(c)
print(d)

# import random

# opts = {'s':'Snake','w':'Water','g':'Gun'}
# rules = {('s','w'):'s', ('w','g'):'w', ('g','s'):'g'}  # winner key

# def play():
#     u = input("Choose (s)nake, (w)ater, (g)un: ").strip().lower()
#     if u not in opts: 
#         print("Invalid choice."); return
#     c = random.choice(list(opts))
#     print(f"You: {opts[u]}  |  Computer: {opts[c]}")
#     if u==c: print("Draw")
#     else:
#         winner = rules.get((u,c)) or rules.get((c,u))
#         print("You win!" if winner==u else "Computer wins!")

# if __name__=='__main__':
#     while True:
#         play()
#         if input("Play again? (y/n): ").strip().lower()!='y': break

