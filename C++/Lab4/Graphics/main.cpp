#include <iostream>
#include "graphics.h"

#include "./lib/Circle/Circle.h"

#include "./lib/Line/Line.h"

#include "./lib/Picture/Picture.h"
#include "./lib/Picture/Picture.cpp"

#include "./lib/Point/Point.h"
#include "./lib/Point/Point.cpp"

#include "./lib/Rect/Rect.h"

using namespace std;

int main()
{
    // run with command { g++ main.cpp -lSDL_bgi -lSDL2 && ./a.out }
    int gd = DETECT, gm;
    initgraph(&gd, &gm, NULL);

    Picture myPic;

    Circle cArr[3] = {Circle(50, 50, 50), Circle(200, 100, 100), Circle(420, 50, 30)};

    Rect rArr[2] = {Rect(30, 40, 170, 100), Rect(420, 50, 500, 300)};

    Line l1(420, 50, 300, 300);
    Line l2(40, 500, 500, 400);

    Line lArr[2] = {Line(420, 50, 300, 300), Line(40, 500, 500, 400)};

    myPic.setCircles(3, cArr);
    myPic.setRects(2, rArr);
    myPic.setLines(2, lArr);

    myPic.paint();

    getch();
    closegraph();

    return 0;
}