import timeit


def testDict():
    d = {
        'eggs': 540,
        'bread': 74,
        'toilet paper': 999
    }
    dv = d.get('bread')
    return dv


def testList():
    l = [
        'eggs', 540,
        'bread', 74,
        'toiler paper', 999
    ]
    i = l.index('bread') + 1
    lv = l[i]
    return lv


if __name__ == '__main__':
    print(
        f'Dictionary speed: {timeit.timeit("testDict()", setup="from __main__ import testDict", number=1000000):.5f} seconds.')
    print(
        f'List speed: {timeit.timeit("testList()", setup="from __main__ import testList", number=1000000):.5f} seconds.')
