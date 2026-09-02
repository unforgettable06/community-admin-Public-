/* 绿邻社区 后台管理系统 */
(function () {
  'use strict'

  // ================= 数据层 =================
  const DB_KEY = 'admin_db'

  // 预置模拟数据（结构与小程序端一致，便于日后对接）
  function seedData() {
    const avatar = (p) =>
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' +
      encodeURIComponent(p) + '&image_size=square'
    const img = (p) =>
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' +
      encodeURIComponent(p) + '&image_size=landscape_4_3'

    return {
      users: [
        { id: 'u_1001', nickname: '绿色居民', phone: '138****6621', community: '阳光花园 3栋', realNameStatus: 'verified', realName: '林晓', carbonPoints: 328, recycledCount: 15, activityCount: 6, registerTime: '2026-06-12' },
        { id: 'u_1002', nickname: '低碳达人', phone: '139****8830', community: '阳光花园 1栋', realNameStatus: 'verified', realName: '王磊', carbonPoints: 516, recycledCount: 22, activityCount: 9, registerTime: '2026-05-30' },
        { id: 'u_1003', nickname: '阳台农夫', phone: '137****5502', community: '阳光花园 5栋', realNameStatus: 'verified', realName: '陈伯', carbonPoints: 402, recycledCount: 18, activityCount: 7, registerTime: '2026-05-02' },
        { id: 'u_1004', nickname: '甜甜妈妈', phone: '135****9917', community: '阳光花园 2栋', realNameStatus: 'pending', realName: '', carbonPoints: 96, recycledCount: 3, activityCount: 2, registerTime: '2026-07-18' },
        { id: 'u_1005', nickname: '骑行爱好者', phone: '136****3324', community: '阳光花园 9栋', realNameStatus: 'verified', realName: '赵晨', carbonPoints: 275, recycledCount: 8, activityCount: 4, registerTime: '2026-06-01' },
        { id: 'u_1006', nickname: '多肉控', phone: '158****7788', community: '阳光花园 6栋', realNameStatus: 'pending', realName: '', carbonPoints: 58, recycledCount: 1, activityCount: 1, registerTime: '2026-08-10' }
      ],
      posts: [
        { id: 'p_1', title: '旧牛仔裤改造环保袋教程，一次成功！', author: '低碳达人', tags: ['旧物改造', '减塑'], likes: 46, comments: 12, time: '2026-08-31 09:20', status: 'normal', avatar: avatar('young man green shirt') },
        { id: 'p_2', title: '本周垃圾分类红黑榜来啦', author: '垃圾分类督导员', tags: ['垃圾分类', '公告'], likes: 89, comments: 34, time: '2026-08-31 08:05', status: 'pinned', avatar: avatar('middle aged woman green vest') },
        { id: 'p_3', title: '厨余堆肥第30天，看看我的成果', author: '阳台农夫', tags: ['堆肥', '阳台菜园'], likes: 120, comments: 28, time: '2026-08-30 21:40', status: 'normal', avatar: avatar('elder man straw hat') },
        { id: 'p_4', title: '组队骑行通勤，今天第100天！', author: '骑行爱好者', tags: ['低碳出行'], likes: 76, comments: 19, time: '2026-08-30 18:12', status: 'normal', avatar: avatar('man with helmet') },
        { id: 'p_5', title: '给孩子的环保生日派对', author: '全职妈妈', tags: ['零浪费', '亲子'], likes: 58, comments: 15, time: '2026-08-29 15:30', status: 'normal', avatar: avatar('mother holding child') },
        { id: 'p_6', title: '【违规】群内广告：出售假冒名牌包', author: '广告号', tags: ['广告'], likes: 2, comments: 0, time: '2026-08-31 10:02', status: 'hidden', avatar: avatar('robot') }
      ],
      marketItems: [
        { id: 'm_1', title: '九成新儿童自行车（16寸）', category: '母婴儿童', price: '可置换', owner: '甜甜妈妈', views: 36, time: '2026-08-31 09:40', status: 'on', image: img('children bicycle 16 inch') },
        { id: 'm_2', title: '咖啡渣烘干机（几乎全新）', category: '生活家电', price: '可置换', owner: '咖啡虫', views: 21, time: '2026-08-31 08:30', status: 'on', image: img('coffee grounds dryer') },
        { id: 'm_3', title: '考研英语全套资料（含笔记）', category: '书籍文具', price: '免费', owner: '研一学姐', views: 52, time: '2026-08-31 07:15', status: 'on', image: img('english study books') },
        { id: 'm_4', title: '多肉盆栽10盆打包换', category: '绿植园艺', price: '可置换', owner: '多肉控', views: 44, time: '2026-08-30 17:20', status: 'on', image: img('ten succulent pots') },
        { id: 'm_5', title: '宜家单人沙发（布艺）', category: '家具家电', price: '可置换', owner: '木木', views: 68, time: '2026-08-29 16:00', status: 'on', image: img('ikea single fabric sofa') },
        { id: 'm_6', title: '疑似来源不明的旧手机', category: '数码', price: '¥300', owner: '路人甲', views: 9, time: '2026-08-31 10:10', status: 'off', image: img('used phone') }
      ],
      activities: [
        { id: 'a_1', title: '旧衣回收日 · 以旧换新', time: '9月6日 周六 09:00-16:00', location: '小区中心广场', people: 86, limit: 200, status: '报名中', image: img('used clothes collection event') },
        { id: 'a_2', title: '垃圾分类知识挑战赛', time: '9月13日 周六 10:00-12:00', location: '社区活动中心 3楼', people: 42, limit: 60, status: '报名中', image: img('garbage sorting quiz') },
        { id: 'a_3', title: '阳台菜园·种子领养计划', time: '9月20日 周日 14:00-16:00', location: '阳光花园 空中花园', people: 105, limit: 150, status: '报名中', image: img('balcony vegetable garden seed') },
        { id: 'a_4', title: '旧物置换市集', time: '9月27日 周日 09:00-15:00', location: '小区中心广场', people: 58, limit: 100, status: '报名中', image: img('swap market community square') }
      ],
      pointsLogs: [
        { id: 'pl_1', user: '绿色居民', action: '实名认证奖励', points: 50, type: '+', time: '2026-08-31 10:30' },
        { id: 'pl_2', user: '低碳达人', action: '旧物成功置换', points: 20, type: '+', time: '2026-08-31 09:10' },
        { id: 'pl_3', user: '阳台农夫', action: '参与环保活动', points: 30, type: '+', time: '2026-08-30 20:00' },
        { id: 'pl_4', user: '骑行爱好者', action: '发布环保帖子', points: 10, type: '+', time: '2026-08-30 18:20' },
        { id: 'pl_5', user: '甜甜妈妈', action: '违规内容扣除', points: 20, type: '-', time: '2026-08-29 11:00' },
        { id: 'pl_6', user: '绿色居民', action: '兑换环保袋', points: 100, type: '-', time: '2026-08-28 15:40' },
        { id: 'pl_7', user: '低碳达人', action: '垃圾分类答题冠军', points: 80, type: '+', time: '2026-08-27 10:00' }
      ]
    }
  }

  function loadDB() {
    let db = null
    try {
      db = JSON.parse(localStorage.getItem(DB_KEY))
    } catch (e) { db = null }
    if (!db) {
      db = seedData()
      saveDB(db)
    }
    return db
  }
  function saveDB(db) {
    localStorage.setItem(DB_KEY, JSON.stringify(db))
  }

  // ================= DOM 工具 =================
  const $ = (sel) => document.querySelector(sel)
  const $$ = (sel) => Array.from(document.querySelectorAll(sel))

  let db = loadDB()

  function toast(msg) {
    const t = $('#toast')
    t.textContent = msg
    t.style.display = 'block'
    clearTimeout(t._timer)
    t._timer = setTimeout(() => { t.style.display = 'none' }, 1600)
  }

  function openModal(html, handlers) {
    $('#modalBox').innerHTML = html
    $('#modalMask').style.display = 'flex'
    if (handlers) {
      handlers.forEach((h) => {
        const el = $(h.sel)
        if (el) el.addEventListener('click', h.fn)
      })
    }
  }
  function closeModal() {
    $('#modalMask').style.display = 'none'
  }

  function confirmBox(title, onOk) {
    openModal(
      '<div class="modal-title">' + title + '</div>' +
      '<div style="color:#666">该操作不可撤销，确定继续吗？</div>' +
      '<div class="modal-foot">' +
      '<button class="btn btn-plain" data-act="cancel">取消</button>' +
      '<button class="btn btn-primary-sm" data-act="ok">确定</button>' +
      '</div>',
      [
        { sel: '[data-act=cancel]', fn: closeModal },
        { sel: '[data-act=ok]', fn: () => { closeModal(); onOk() } }
      ]
    )
  }

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  }

  // ================= 视图 =================
  const VIEWS = {
    dashboard: { title: '仪表盘', render: renderDashboard },
    posts: { title: '帖子管理', render: renderPosts },
    market: { title: '闲置管理', render: renderMarket },
    activities: { title: '活动管理', render: renderActivities },
    users: { title: '用户管理', render: renderUsers },
    points: { title: '积分记录', render: renderPoints }
  }

  let currentView = 'dashboard'
  let searchKw = ''

  function switchView(view) {
    currentView = view
    $$('.nav-item').forEach((el) => el.classList.toggle('active', el.dataset.view === view))
    $('#pageTitle').textContent = VIEWS[view].title
    render()
  }

  function render() {
    VIEWS[currentView].render()
  }

  // ================= 仪表盘 =================
  function renderDashboard() {
    const users = db.users.length
    const verified = db.users.filter(u => u.realNameStatus === 'verified').length
    const posts = db.posts.length
    const marketOn = db.marketItems.filter(i => i.status === 'on').length
    const act = db.activities.length
    const totalPoints = db.pointsLogs
      .filter(l => l.type === '+')
      .reduce((s, l) => s + l.points, 0)
    const pendingVerify = db.users.filter(u => u.realNameStatus === 'pending').length
    const hiddenPosts = db.posts.filter(p => p.status === 'hidden').length
    const actRate = Math.round(db.activities.reduce((s, a) => s + a.people / a.limit, 0) / Math.max(1, act) * 100)

    // 近7日积分发放走势（模拟）
    const days = ['8/25', '8/26', '8/27', '8/28', '8/29', '8/30', '8/31']
    const vals = [40, 60, 160, 30, 90, 110, 130]
    const max = Math.max.apply(null, vals)

    $('#content').innerHTML =
      '<div class="stat-grid">' +
        statCard(users, '注册用户', verified + ' 已实名') +
        statCard(posts, '帖子总数', hiddenPosts + ' 条已下架') +
        statCard(marketOn, '在售闲置', db.marketItems.length + ' 条全部') +
        statCard(act, '环保活动', '平均报名率 ' + actRate + '%') +
      '</div>' +
      '<div class="stat-grid">' +
        statCard(totalPoints, '累计发放碳积分', '+') +
        statCard(pendingVerify, '待实名审核', '需及时处理') +
      '</div>' +
      '<div class="card">' +
        '<div class="card-title">近 7 日碳积分发放趋势</div>' +
        '<div class="chart-bars">' +
        days.map((d, i) =>
          '<div class="chart-col"><div class="chart-bar" style="height:' +
          Math.round(vals[i] / max * 100) + '%"></div><div class="chart-label">' + d + '</div></div>'
        ).join('') +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-title">待办事项</div>' +
        '<table class="tbl"><tbody>' +
        '<tr><td>👥 待审核实名认证</td><td>' + pendingVerify + ' 人</td><td><button class="op-btn" data-goto="users">去处理</button></td></tr>' +
        '<tr><td>📝 待处理违规帖子</td><td>' + hiddenPosts + ' 条</td><td><button class="op-btn" data-goto="posts">去处理</button></td></tr>' +
        '<tr><td>♻ 待上架闲置物品</td><td>' + db.marketItems.filter(i => i.status === 'off').length + ' 条</td><td><button class="op-btn" data-goto="market">去处理</button></td></tr>' +
        '</tbody></table>' +
      '</div>'

    $$('[data-goto]').forEach((el) => {
      el.addEventListener('click', () => switchView(el.dataset.goto))
    })
  }

  function statCard(num, label, sub) {
    return '<div class="stat-card"><div class="num">' + num + '</div>' +
      '<div class="label">' + label + '</div><div class="sub">' + sub + '</div></div>'
  }

  // ================= 帖子管理 =================
  function renderPosts() {
    const kw = searchKw.toLowerCase()
    const list = db.posts.filter(p =>
      p.title.toLowerCase().includes(kw) || p.author.toLowerCase().includes(kw)
    )
    const rows = list.map(p =>
      '<tr>' +
      '<td>' + (p.status === 'pinned' ? '📌 ' : '') + esc(p.title) + '</td>' +
      '<td><img class="avatar-sm" src="' + p.avatar + '"/>' + esc(p.author) + '</td>' +
      '<td>' + (p.tags || []).map(t => '<span class="badge badge-green">' + esc(t) + '</span> ').join('') + '</td>' +
      '<td>' + p.likes + ' / ' + p.comments + '</td>' +
      '<td>' + statusBadge(p.status) + '</td>' +
      '<td>' +
        (p.status === 'pinned'
          ? '<button class="op-btn" data-act="unpin" data-id="' + p.id + '">取消置顶</button>'
          : '<button class="op-btn" data-act="pin" data-id="' + p.id + '">置顶</button>') +
        (p.status === 'normal' || p.status === 'pinned'
          ? '<button class="op-btn orange" data-act="hide" data-id="' + p.id + '">下架</button>'
          : '<button class="op-btn" data-act="show" data-id="' + p.id + '">上架</button>') +
        '<button class="op-btn danger" data-act="del" data-id="' + p.id + '">删除</button>' +
      '</td>' +
      '</tr>'
    ).join('')

    $('#content').innerHTML =
      '<div class="card">' +
        '<div class="toolbar">' +
          '<input class="search-ipt" id="searchInput" placeholder="搜索标题 / 作者…" value="' + esc(searchKw) + '" />' +
          '<span style="color:#999;font-size:13px">共 ' + list.length + ' 条</span>' +
        '</div>' +
        '<table class="tbl"><thead><tr>' +
        '<th>标题</th><th>作者</th><th>标签</th><th>赞/评</th><th>状态</th><th>操作</th>' +
        '</tr></thead><tbody>' + (rows || '<tr><td colspan="6" class="empty">暂无帖子</td></tr>') + '</tbody></table>' +
      '</div>'

    bindSearch()
    $$('[data-act]').forEach((el) => el.addEventListener('click', onPostAction))
  }

  function onPostAction(e) {
    const act = e.currentTarget.dataset.act
    const id = e.currentTarget.dataset.id
    const post = db.posts.find(p => p.id === id)
    if (!post) return
    if (act === 'pin') { post.status = 'pinned'; toast('已置顶') }
    if (act === 'unpin') { post.status = 'normal'; toast('已取消置顶') }
    if (act === 'hide') { post.status = 'hidden'; toast('已下架') }
    if (act === 'show') { post.status = 'normal'; toast('已上架') }
    if (act === 'del') {
      confirmBox('确定删除该帖子？', () => {
        db.posts = db.posts.filter(p => p.id !== id)
        saveDB(db); render(); toast('已删除')
      })
      return
    }
    saveDB(db); render()
  }

  // ================= 闲置管理 =================
  function renderMarket() {
    const kw = searchKw.toLowerCase()
    const list = db.marketItems.filter(i =>
      i.title.toLowerCase().includes(kw) || i.owner.toLowerCase().includes(kw)
    )
    const rows = list.map(i =>
      '<tr>' +
      '<td><img class="img-thumb" src="' + i.image + '"/></td>' +
      '<td>' + esc(i.title) + '</td>' +
      '<td>' + esc(i.category) + '</td>' +
      '<td>' + esc(i.price) + '</td>' +
      '<td>' + esc(i.owner) + ' · ' + i.views + ' 浏览</td>' +
      '<td>' + (i.status === 'on' ? '<span class="badge badge-green">在售</span>' : '<span class="badge badge-gray">已下架</span>') + '</td>' +
      '<td>' +
        (i.status === 'on'
          ? '<button class="op-btn orange" data-act="off" data-id="' + i.id + '">下架</button>'
          : '<button class="op-btn" data-act="on" data-id="' + i.id + '">上架</button>') +
        '<button class="op-btn danger" data-act="del" data-id="' + i.id + '">删除</button>' +
      '</td>' +
      '</tr>'
    ).join('')

    $('#content').innerHTML =
      '<div class="card">' +
        '<div class="toolbar">' +
          '<input class="search-ipt" id="searchInput" placeholder="搜索物品 / 发布者…" value="' + esc(searchKw) + '" />' +
          '<span style="color:#999;font-size:13px">共 ' + list.length + ' 条</span>' +
        '</div>' +
        '<table class="tbl"><thead><tr>' +
        '<th>图片</th><th>标题</th><th>分类</th><th>价格</th><th>发布者</th><th>状态</th><th>操作</th>' +
        '</tr></thead><tbody>' + (rows || '<tr><td colspan="7" class="empty">暂无闲置物品</td></tr>') + '</tbody></table>' +
      '</div>'

    bindSearch()
    $$('[data-act]').forEach((el) => el.addEventListener('click', onMarketAction))
  }

  function onMarketAction(e) {
    const act = e.currentTarget.dataset.act
    const id = e.currentTarget.dataset.id
    const item = db.marketItems.find(i => i.id === id)
    if (!item) return
    if (act === 'on') { item.status = 'on'; toast('已上架') }
    if (act === 'off') { item.status = 'off'; toast('已下架') }
    if (act === 'del') {
      confirmBox('确定删除该闲置物品？', () => {
        db.marketItems = db.marketItems.filter(i => i.id !== id)
        saveDB(db); render(); toast('已删除')
      })
      return
    }
    saveDB(db); render()
  }

  // ================= 活动管理 =================
  function renderActivities() {
    const rows = db.activities.map(a =>
      '<tr>' +
      '<td><img class="img-thumb" src="' + a.image + '"/></td>' +
      '<td>' + esc(a.title) + '</td>' +
      '<td>' + esc(a.time) + '</td>' +
      '<td>' + esc(a.location) + '</td>' +
      '<td>' + a.people + ' / ' + a.limit + '</td>' +
      '<td><span class="badge badge-green">' + esc(a.status) + '</span></td>' +
      '<td>' +
        '<button class="op-btn" data-act="edit" data-id="' + a.id + '">编辑</button>' +
        '<button class="op-btn danger" data-act="del" data-id="' + a.id + '">删除</button>' +
      '</td>' +
      '</tr>'
    ).join('')

    $('#content').innerHTML =
      '<div class="card">' +
        '<div class="toolbar">' +
          '<span style="font-size:14px;font-weight:bold">活动列表</span>' +
          '<button class="btn btn-primary btn-block" style="width:auto;height:36px;padding:0 20px" id="addActivity">+ 新建活动</button>' +
        '</div>' +
        '<table class="tbl"><thead><tr>' +
        '<th>图片</th><th>标题</th><th>时间</th><th>地点</th><th>报名</th><th>状态</th><th>操作</th>' +
        '</tr></thead><tbody>' + (rows || '<tr><td colspan="7" class="empty">暂无活动</td></tr>') + '</tbody></table>' +
      '</div>'

    $('#addActivity').addEventListener('click', () => openActivityModal(null))
    $$('[data-act]').forEach((el) => el.addEventListener('click', onActivityAction))
  }

  function onActivityAction(e) {
    const act = e.currentTarget.dataset.act
    const id = e.currentTarget.dataset.id
    const activity = db.activities.find(a => a.id === id)
    if (act === 'edit') { openActivityModal(activity); return }
    if (act === 'del') {
      confirmBox('确定删除该活动？', () => {
        db.activities = db.activities.filter(a => a.id !== id)
        saveDB(db); render(); toast('已删除')
      })
    }
  }

  function openActivityModal(activity) {
    const a = activity || {}
    openModal(
      '<div class="modal-title">' + (activity ? '编辑活动' : '新建活动') + '</div>' +
      '<div class="form-row"><label>活动标题</label><input class="ipt" id="fTitle" value="' + esc(a.title || '') + '" /></div>' +
      '<div class="form-row"><label>活动时间</label><input class="ipt" id="fTime" value="' + esc(a.time || '') + '" placeholder="例：9月6日 周六 09:00-16:00" /></div>' +
      '<div class="form-row"><label>活动地点</label><input class="ipt" id="fLoc" value="' + esc(a.location || '') + '" /></div>' +
      '<div class="form-row"><label>人数上限</label><input class="ipt" id="fLimit" type="number" value="' + (a.limit || 100) + '" /></div>' +
      '<div class="form-row"><label>活动介绍</label><textarea id="fDesc" placeholder="活动介绍">' + esc(a.desc || '') + '</textarea></div>' +
      '<div class="form-row"><label>封面图片URL</label><input class="ipt" id="fImage" value="' + esc(a.image || '') + '" /></div>' +
      '<div class="modal-foot">' +
      '<button class="btn btn-plain" id="mCancel">取消</button>' +
      '<button class="btn btn-primary-sm" id="mSave">保存</button>' +
      '</div>',
      [
        { sel: '#mCancel', fn: closeModal },
        {
          sel: '#mSave',
          fn: () => {
            const title = $('#fTitle').value.trim()
            const time = $('#fTime').value.trim()
            const location = $('#fLoc').value.trim()
            const limit = parseInt($('#fLimit').value, 10) || 100
            const desc = $('#fDesc').value.trim()
            const image = $('#fImage').value.trim()
            if (!title) { toast('请填写活动标题'); return }
            if (activity) {
              Object.assign(activity, { title, time, location, limit, desc, image })
            } else {
              db.activities.unshift({
                id: 'a_' + Date.now(),
                title, time, location, limit, desc, image,
                people: 0, status: '报名中'
              })
            }
            saveDB(db); closeModal(); render(); toast('已保存')
          }
        }
      ]
    )
  }

  // ================= 用户管理 =================
  function renderUsers() {
    const kw = searchKw.toLowerCase()
    const list = db.users.filter(u =>
      u.nickname.toLowerCase().includes(kw) || (u.phone || '').includes(kw)
    )
    const rows = list.map(u =>
      '<tr>' +
      '<td><img class="avatar-sm" src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' + encodeURIComponent('flat avatar ' + u.nickname + ' green theme') + '&image_size=square"/>' + esc(u.nickname) + '</td>' +
      '<td>' + esc(u.phone) + '</td>' +
      '<td>' + esc(u.community) + '</td>' +
      '<td>' + (u.realNameStatus === 'verified'
        ? '<span class="badge badge-green">已实名 · ' + esc(u.realName) + '</span>'
        : '<span class="badge badge-orange">待认证</span>') + '</td>' +
      '<td><span style="font-weight:bold;color:#2bb673">' + u.carbonPoints + '</span></td>' +
      '<td>' +
        (u.realNameStatus !== 'verified'
          ? '<button class="op-btn" data-act="verify" data-id="' + u.id + '">通过认证</button>'
          : '<button class="op-btn orange" data-act="points" data-id="' + u.id + '">调积分</button>') +
        '<button class="op-btn danger" data-act="del" data-id="' + u.id + '">删除</button>' +
      '</td>' +
      '</tr>'
    ).join('')

    $('#content').innerHTML =
      '<div class="card">' +
        '<div class="toolbar">' +
          '<input class="search-ipt" id="searchInput" placeholder="搜索昵称 / 手机号…" value="' + esc(searchKw) + '" />' +
          '<span style="color:#999;font-size:13px">共 ' + list.length + ' 人</span>' +
        '</div>' +
        '<table class="tbl"><thead><tr>' +
        '<th>用户</th><th>手机号</th><th>楼栋</th><th>实名状态</th><th>碳积分</th><th>操作</th>' +
        '</tr></thead><tbody>' + (rows || '<tr><td colspan="6" class="empty">暂无用户</td></tr>') + '</tbody></table>' +
      '</div>'

    bindSearch()
    $$('[data-act]').forEach((el) => el.addEventListener('click', onUserAction))
  }

  function onUserAction(e) {
    const act = e.currentTarget.dataset.act
    const id = e.currentTarget.dataset.id
    const user = db.users.find(u => u.id === id)
    if (!user) return
    if (act === 'verify') {
      openModal(
        '<div class="modal-title">实名认证审核</div>' +
        '<div style="color:#666;line-height:1.8">确认用户 <b>' + esc(user.nickname) + '</b> 已提交身份信息并通过核验？</div>' +
        '<div class="modal-foot">' +
        '<button class="btn btn-plain" id="mCancel">取消</button>' +
        '<button class="btn btn-primary-sm" id="mOk">通过并奖励50积分</button>' +
        '</div>',
        [
          { sel: '#mCancel', fn: closeModal },
          {
            sel: '#mOk',
            fn: () => {
              user.realNameStatus = 'verified'
              user.realName = '核验用户'
              user.carbonPoints += 50
              db.pointsLogs.unshift({ id: 'pl_' + Date.now(), user: user.nickname, action: '实名认证奖励', points: 50, type: '+', time: nowStr() })
              saveDB(db); closeModal(); render(); toast('已通过认证')
            }
          }
        ]
      )
    } else if (act === 'points') {
      openModal(
        '<div class="modal-title">调整碳积分</div>' +
        '<div class="form-row"><label>用户：' + esc(user.nickname) + '（当前 ' + user.carbonPoints + ' 分）</label>' +
        '<input class="ipt" id="fPoints" type="number" placeholder="输入积分数值，正数为增加，负数为扣除" /></div>' +
        '<div class="form-row"><label>原因</label><input class="ipt" id="fReason" placeholder="如：活动奖励 / 违规扣除" /></div>' +
        '<div class="modal-foot">' +
        '<button class="btn btn-plain" id="mCancel">取消</button>' +
        '<button class="btn btn-primary-sm" id="mOk">确认调整</button>' +
        '</div>',
        [
          { sel: '#mCancel', fn: closeModal },
          {
            sel: '#mOk',
            fn: () => {
              const val = parseInt($('#fPoints').value, 10)
              const reason = $('#fReason').value.trim()
              if (!val) { toast('请输入有效积分'); return }
              user.carbonPoints += val
              db.pointsLogs.unshift({ id: 'pl_' + Date.now(), user: user.nickname, action: reason || '人工调整', points: Math.abs(val), type: val > 0 ? '+' : '-', time: nowStr() })
              saveDB(db); closeModal(); render(); toast('已调整')
            }
          }
        ]
      )
    } else if (act === 'del') {
      confirmBox('确定删除该用户？', () => {
        db.users = db.users.filter(u => u.id !== id)
        saveDB(db); render(); toast('已删除')
      })
    }
  }

  // ================= 积分记录 =================
  function renderPoints() {
    const kw = searchKw.toLowerCase()
    const list = db.pointsLogs.filter(l => l.user.toLowerCase().includes(kw) || l.action.toLowerCase().includes(kw))
    const rows = list.map(l =>
      '<tr>' +
      '<td>' + esc(l.user) + '</td>' +
      '<td>' + esc(l.action) + '</td>' +
      '<td><span style="color:' + (l.type === '+' ? '#2bb673' : '#e64340') + ';font-weight:bold">' + l.type + l.points + '</span></td>' +
      '<td>' + esc(l.time) + '</td>' +
      '</tr>'
    ).join('')

    $('#content').innerHTML =
      '<div class="card">' +
        '<div class="toolbar">' +
          '<input class="search-ipt" id="searchInput" placeholder="搜索用户 / 行为…" value="' + esc(searchKw) + '" />' +
          '<span style="color:#999;font-size:13px">共 ' + list.length + ' 条</span>' +
        '</div>' +
        '<table class="tbl"><thead><tr>' +
        '<th>用户</th><th>行为</th><th>积分</th><th>时间</th>' +
        '</tr></thead><tbody>' + (rows || '<tr><td colspan="4" class="empty">暂无记录</td></tr>') + '</tbody></table>' +
      '</div>'

    bindSearch()
  }

  // ================= 公共 =================
  function statusBadge(status) {
    if (status === 'pinned') return '<span class="badge badge-green">置顶</span>'
    if (status === 'hidden') return '<span class="badge badge-red">已下架</span>'
    return '<span class="badge badge-gray">正常</span>'
  }

  function bindSearch() {
    const input = $('#searchInput')
    if (input) {
      input.addEventListener('input', (e) => {
        searchKw = e.target.value
        render()
      })
    }
  }

  function nowStr() {
    const d = new Date()
    const p = (n) => (n < 10 ? '0' + n : n)
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes())
  }

  // ================= 登录 =================
  function checkLogin() {
    if (sessionStorage.getItem('admin_login')) {
      $('#loginView').style.display = 'none'
      $('#appView').style.display = 'flex'
      switchView('dashboard')
      renderToday()
    } else {
      $('#loginView').style.display = 'flex'
      $('#appView').style.display = 'none'
    }
  }

  function renderToday() {
    const d = new Date()
    const week = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()]
    $('#todayStr').textContent = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日 星期' + week
  }

  // ================= 事件绑定 =================
  function init() {
    $('#loginBtn').addEventListener('click', () => {
      const account = $('#adminAccount').value.trim()
      const password = $('#adminPassword').value
      if (account === 'admin' && password === '123456') {
        sessionStorage.setItem('admin_login', '1')
        toast('欢迎回来，管理员')
        checkLogin()
      } else {
        toast('账号或密码错误（admin / 123456）')
      }
    })

    $('#logoutBtn').addEventListener('click', () => {
      sessionStorage.removeItem('admin_login')
      toast('已退出登录')
      checkLogin()
    })

    $('#modalMask').addEventListener('click', (e) => {
      if (e.target === $('#modalMask')) closeModal()
    })

    $$('.nav-item').forEach((el) => {
      el.addEventListener('click', () => switchView(el.dataset.view))
    })

    checkLogin()
  }

  document.addEventListener('DOMContentLoaded', init)
})()