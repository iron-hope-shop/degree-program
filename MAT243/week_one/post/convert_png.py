import base64

with open("step_three.png", "rb") as p:
    tmpfile = p.read()
    encoded = base64.b64encode(tmpfile).decode('utf-8')
    html = '<img src=\'data:image/png;base64,{}\'>'.format(encoded)
    # html = 'Some html head' + '<img src=\'data:image/png;base64,{}\'>'.format(encoded) + 'Some more html'
    with open('step_three.html','w') as f:
        f.write(html)

# import base64
# data_uri = base64.b64encode(open('Figure_1.png', 'rb').read()).decode('utf-8')
# img_tag = '<img src="data:image/png;base64,{0}">'.format(data_uri)
# print(img_tag)